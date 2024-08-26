# 1- run `./runall.sh`
# 2- connect to db by the credential presented in the dockerfile as env
# 3- add a table call it Alerts that has two columns (id(int),message (varchar(50)))
# 4- insert a message manually
# for the database operations you can use Database Client JDBC extension from Vscode.

## To run with ansible
1. Install ansible (install wsl on windows then) run apt(or any package installer you have) install ansible
2. run: `ansible-playbook playbook.yml`
