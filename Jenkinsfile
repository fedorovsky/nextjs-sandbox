pipeline {
  agent any

  options { timestamps() }

  environment {
    IMAGE_NAME     = 'image-nextjs-sandbox'
    CONTAINER_NAME = 'container-nextjs-sandbox'
    APP_PORT       = '1004'
    CONTAINER_PORT = '3000'
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Docker Build') {
      steps {
        sh '''
          docker build --pull \
          --build-arg COMMIT_SHA=${GIT_COMMIT} \
          -t ${IMAGE_NAME} .
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
            ${IMAGE_NAME}
        '''
      }
    }
  }

  post {
    success {
      echo "Приложение поднято: http://localhost:${APP_PORT}"
    }
    failure {
      sh 'docker logs ${CONTAINER_NAME} || true'
    }
    always {
      echo "IMAGE: ${IMAGE_NAME}, CONTAINER: ${CONTAINER_NAME}"
    }
  }
}
