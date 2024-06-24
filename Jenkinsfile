pipeline {
    agent any
    environment {
        NODE_VERSION = '22.0.0'
    }
    stages {
        stage('Setup Node.js') {
            steps {
                script {
                    // Use withNvm block provided by the nvm-wrapper plugin
                    withNvm(nodejsInstallationName: "${NODE_VERSION}") {
                        sh '''
                        node -v
                        npm -v
                        '''
                    }
                }
            }
        }
        stage('Checkout Code') {
            steps {
                git branch: 'master', 
                    url: 'https://github.com/sousa16/internship-prep' 
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    withNvm(nodejsInstallationName: "${NODE_VERSION}") {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build Next.js App') {
            steps {
                script {
                    withNvm(nodejsInstallationName: "${NODE_VERSION}") {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Run Playwright Tests') {
            steps {
                script {
                    withNvm(nodejsInstallationName: "${NODE_VERSION}") {
                        sh 'npx playwright test'
                    }
                }
            }
        }
    }
    post {
        always {
            // Archive build artifacts (optional)
            archiveArtifacts artifacts: '**/.next/**', fingerprint: true
        }
    }
}