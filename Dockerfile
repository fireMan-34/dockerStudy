# 镜像组件
FROM node:20

# 工作空间
WORKDIR /app

# 复制目录到当前 docker 根目录
COPY /app /

#安装构建依赖
RUN yarn install

# 添加启动容器命令
CMD [ "yarn", "dev" ]

EXPOSE 3000