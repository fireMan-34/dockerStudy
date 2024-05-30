# 镜像组件
FROM node:20

# 添加文件
ADD docker.study.json /docker.study.json

# 添加构建时环境变量
ARG process.env.BUILD=DOCKER

# 环境变量
# https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
ENV STUDY = DOCKER

# 复制目录到当前 docker 根目录
COPY /app /

# 工作空间
WORKDIR /app

#安装构建依赖
RUN yarn install

# 添加启动容器命令
CMD [ "yarn", "build" ]

EXPOSE 3000