testPath=$1
subPath=$2
directory=$3

echo $directory
export PYTHONPATH=$directory

touch $directory/__init__.py

python3 -m pytest $testPath