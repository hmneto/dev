FROM ubuntu
RUN apt-get update && apt-get install -y \
    curl \
    git 
RUN curl -O https://nodejs.org/download/release/v10.15.2/node-v10.15.2-linux-x64.tar.gz
RUN tar xzf node-v10.15.2-linux-x64.tar.gz
ENV PATH="/node-v10.15.2-linux-x64/bin:${PATH}"
RUN curl -L https://www.npmjs.com/install.sh | sh
RUN npm install create-react-app -g
RUN create-react-app app
WORKDIR /app
RUN git config --global user.email "hmneton@gmail.com"
RUN git config --global user.name "hmneto"
RUN echo "# s" >> README.md
RUN git init
RUN git add README.md
RUN git commit -m "first commit"
RUN git remote add origin https://github.com/hmneto/s.git
# RUN git push -u origin master