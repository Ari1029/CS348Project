FROM python:3.9
WORKDIR /app
COPY . ./
RUN pip install pip-tools
RUN pip-compile requirements.in
RUN pip install -r requirements.in
ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
