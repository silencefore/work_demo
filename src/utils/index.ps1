if(-not(Test-path file)){mkdir  file}
rm -Force file/*
$sl = 1
$sll = 100
for($sl;$sl -lt 50;$sl++)
{
    echo  $sl
    wget -Uri "https://quality.ncis.cn/static/drgs/form-$sl.html" -Outfile "./file/form-$sl.html"
}

