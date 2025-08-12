pipeline {
  agent any

  options {
    timestamps()
  }

  environment {
    IMAGE_NAME     = 'image-nextjs-sandbox'
    CONTAINER_NAME = 'image-nextjs-sandbox'
    APP_PORT       = '1004' // внешний порт хоста
    CONTAINER_PORT = '3000' // порт внутри контейнера (EXPOSE 3000)
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Docker Build') {
      steps {
        sh '''
          docker version
          docker build \
            --pull \
            -t ${IMAGE_NAME}:latest \
            -t ${IMAGE_NAME}:${BUILD_NUMBER} \
            .
        '''
      }
    }

    stage('Stop & Remove Previous Container') {
      steps {
        sh '''
          if [ "$(docker ps -aq -f name=^${CONTAINER_NAME}$)" ]; then
            docker rm -f ${CONTAINER_NAME} || true
          fi
        '''
      }
    }

    stage('Run Container') {
      steps {
        sh '''
          docker run -d \
            --name ${CONTAINER_NAME} \
            -p ${APP_PORT}:${CONTAINER_PORT} \
            -e NODE_ENV=production \
            ${IMAGE_NAME}:latest

          docker ps --filter "name=${CONTAINER_NAME}"
        '''
      }
    }
  }

  post {
    success {
      echo "Приложение поднято: http://<JENKINS_AGENT_HOST>:${APP_PORT}"
    }
    failure {
      sh 'docker logs ${CONTAINER_NAME} || true'
    }
    always {
      echo "IMAGE: ${IMAGE_NAME}, CONTAINER: ${CONTAINER_NAME}"
    }
  }
}
