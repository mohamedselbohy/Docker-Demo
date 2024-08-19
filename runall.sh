docker stop frontend_cont || true
docker rm frontend_cont || true
docker rmi devopsfrontend || true

docker stop backend_cont || true
docker rm backend_cont || true
docker rmi devopsbackend || true

docker stop mysql_cont || true
docker rm mysql_cont || true
docker rmi devopsmysql || true

docker build -t devopsmysql:latest -f ./Dockerfile.db .
docker run --name mysql_cont --network backdb -p 3306:3306 -v mysqldata:/var/lib/mysql -d devopsmysql

docker build -t devopsbackend:latest -f ./Dockerfile.back .
docker run --name backend_cont --network backdb --network frontback -p 4000:4000 -d devopsbackend

docker build -t devopsfrontend:latest -f ./Dockerfile .
docker run --name frontend_cont --network frontback -p 80:80 -d devopsfrontend