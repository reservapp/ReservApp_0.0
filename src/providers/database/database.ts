import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {

  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public http: Http, public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform) {
    console.log('Hello DatabaseProvider Provider');

    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'users.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }


  fillDatabase() {
    this.http.get('assets/users.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }


  addUser(userName, userLastname, email, userPassword, phone) {
    let data = [userName, userLastname, email, userPassword, phone]
    return this.database.executeSql("INSERT INTO users (userName, userLastname, email, userPassword, phone) VALUES (?, ?, ?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }


  getAllUsers() {
    return this.database.executeSql("SELECT * FROM users", []).then((data) => {
      let users = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          users.push({ userName: data.rows.item(i).userName, userLastname: data.rows.item(i).userLastname, email: data.rows.item(i).email, userPassword: data.rows.item(i).userPassword, phone: data.rows.item(i).phone });
        }
      }
      return users;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }


  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

}