# baiduAI 颜值测试
基于百度AI接口的颜值评分小程序

![view1](./images/demo_view/view1.png)

### 参考文档

- 百度 帮助文档

  [人脸识别](https://cloud.baidu.com/doc/FACE/index.html)

  [通用参考](https://ai.baidu.com/doc/REFERENCE/index.html)

- [git pull 拉取更新失败解决方案](https://www.cnblogs.com/yxfboke/p/11544087.html)

我在gittub新建了一个项目仓库practice，然后我在本地将写好的项目推送到该仓库中去，操作如下：

1git init

初始化，不然git无法跟踪

2

git add .

git commit -m "first commit"

提交所有文件到暂存区

3git remote add origin git@github.com:yangxf1854/practice.git

添加远程仓库，此时会提示我远程仓库已经存在，因为我在gittub上建过

4git push -u origin master。

提示

![img](https://img2018.cnblogs.com/blog/1338298/201909/1338298-20190918173443566-653249681.png)

 

 5然后根据提示执行git pull origin master

提示

![img](https://img2018.cnblogs.com/blog/1338298/201909/1338298-20190918173648813-149021776.png)

 

 解决方案：

拉取时执行如下命令：

git pull origin master --allow-unrelated-histories

对此，官方解释如下：

![img](https://img2018.cnblogs.com/blog/1338298/201909/1338298-20190918174158286-935386655.png)

 

 6然后再执行

git push --set-upstream origin master（建立本地分支与上游的关系）