import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function connectDB() {
  return open({
    filename: './banco.db',
    driver: sqlite3.Database
  });
}