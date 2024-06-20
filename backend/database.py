import os
import psycopg2
from dotenv import load_dotenv

def use_conn():
  # Change later for prod db
  ENV = os.getenv('ENV')
  if ENV == 'local':
    DB_URL = os.getenv('LOCAL_DB_URL')
  elif ENV == 'dev':
    DB_URL = os.getenv('DEV_DB_URL')
  elif ENV == 'prod':
    DB_URL = os.getenv('PROD_DB_URL')
  else:
    print("Error: Invalid connection")
    return
  return psycopg2.connect(DB_URL)

def test_neon():
  conn = use_conn()
  cursor = conn.cursor()

  cursor.execute('SELECT NOW();')
  time = cursor.fetchone()[0]
  cursor.execute('SELECT version();')
  version = cursor.fetchone()[0]
  cursor.close()
  conn.close()
  # Print the results
  print('Current time:', time)
  print('PostgreSQL version:', version)

def execute_query(query, *args):
  with open('./queries/'+query, 'r') as sql_file:
    sql_query = sql_file.read()

  conn = use_conn()
  cursor = conn.cursor()
  
  try:
    cursor.execute(sql_query, args)
    conn.commit()
    res = cursor.fetchall()
  except Exception as e:
    # conn.rollback()
    res = f"An error occured: {e}"
  finally:
    cursor.close()
    conn.close()
    return res