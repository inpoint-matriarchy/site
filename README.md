Website for career guidance


__for first launch__
```console
foo@bar:~$ cd frontend
foo@bar:~$ npm install
```

__virtualenv for python__
```console
foo@bar:~$ pip install virtualenv
foo@bar:~$ python -m venv env
foo@bar:~$ env/Scripts/activate.ps1 (For Linux/Mac: source env/bin/activate)
foo@bar:~$ pip install -r requirements.txt
```

open two terminals and run

1.  __frontend launch__
    ```console
    foo@bar:~$ cd frontend
    foo@bar:~$ npm run dev
    ```

2.  __backend launch__
    ```console
    foo@bar:~$ python manage.py runserver
    ```