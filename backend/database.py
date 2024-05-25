import psycopg2

def use_conn():
  # Change later for prod db
  return psycopg2.connect('postgresql://postgres:postgres@postgres/postgres')

def execute_query(query):
  with open('./queries/'+query, 'r') as sql_file:
    sql_query = sql_file.read()

  conn = use_conn()
  cursor = conn.cursor()
  
  try:
    cursor.execute(sql_query)
    conn.commit()
    res = cursor.fetchall()
  except Exception as e:
    # conn.rollback()
    res = f"An error occured: {e}"
  finally:
    cursor.close()
    conn.close()
    return res