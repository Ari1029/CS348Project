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

def execute_query(query):
  """
  Performs a query on the database

  :param query: The exact SQL that we execute on the database 
  :return: Any response from the SQL command
  """
  conn = use_conn()
  cursor = conn.cursor()

  try:
    cursor.execute(query)
    conn.commit()
    res = cursor.fetchall()
  except Exception as e:
    # conn.rollback()
    res = f"An error occured: {e}"
  finally:
    cursor.close()
    conn.close()
    return res

def format_sql(template, args = {}):
  """
  Replaces placeholders in the SQL template with values from the args dictionary.

  :param template: The SQL template string with placeholders in the form ${placeholder}
  :param args: Dictionary containing the values to replace in the template
  :return: The formatted SQL string
  """
  formatted_sql = template

  for key, value in args.items():
      placeholder = '${' + key + '}'
      if isinstance(value, str):
          value = f"'{value}'"
      formatted_sql = formatted_sql.replace(placeholder, str(value))

  return formatted_sql

def make_query(query, arg_dict = {}):
  """
  Makes the query on the database; Only function our routers interact with

  :param query: The SQL file that we want to execute our query from
  :arg_dict: A dictionary containing the values to replace in the SQL query
  :return: Any response from the formatted SQL query
  """
  with open('./queries/'+query, 'r') as sql_file:
    sql_query = sql_file.read()

  sql_query = format_sql(sql_query, arg_dict)
  
  if '$' in sql_query:
    return "Error: Missing parameters"

  try:
    res = execute_query(sql_query)
    
  except Exception as e:
    res = f"An error occured: {e}"
  finally:
    return res