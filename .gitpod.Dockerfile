FROM gitpod/workspace-full:latest
ENV NODE_VERSION=18.12.1
RUN sudo apt-get update && sudo apt-get install -y

# Setting version of Node.js for project
RUN bash -c 'VERSION="${NODE_VERSION}" \
    && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
    && nvm use $VERSION && nvm alias default $VERSION'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
