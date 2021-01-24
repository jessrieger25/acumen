testPath=$1
subPath=$2
directory=$3

echo $directory
export PYTHONPATH=$directory

touch $directory/__init__.py
ls
cp ./public/runner/test_syn.py $directory/test_syn.py

cd $directory
python3 -m pytest -s -v
