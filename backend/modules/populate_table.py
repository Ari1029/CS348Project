from modules.database import use_conn

def populate_table(table_name: str, csv_path: str):
  conn = use_conn()
  cursor = conn.cursor()
  try:
    with open(csv_path, 'r') as csv_file:
      lines = csv_file.readlines()
      for line in lines[1:]:
        line = line.strip()
        line = line.replace('"', "'")
        line = line.replace(r"\N", "NULL")
        query = f"INSERT INTO {table_name} VALUES ({line})"
        cursor.execute(query)

    conn.commit()
    res = f"Transaction successful"
  except Exception as e:
    conn.rollback()
    res = f"An error occured: {e}"
  finally:
    cursor.close()
    conn.close()
    return res