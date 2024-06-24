pipeline {
    agent any
    environment {
        NODE_VERSION = '22.0.0'
        NVM_DIR = "${env.WORKSPACE}/.nvm"
    }
    stages {
        stage('Setup Node.js') {
            steps {
                sh '''
                if [ -s "$NVM_DIR/nvm.sh" ]; then
                    . "$NVM_DIR/nvm.sh"
                else
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
                    . "$NVM_DIR/nvm.sh"
                fi
                nvm install ${NODE_VERSION}
                nvm use ${NODE_VERSION}
                nvm alias default ${NODE_VERSION}
                node -v
                npm -v
                '''
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
                sh '''
                . "$NVM_DIR/nvm.sh"
                nvm use ${NODE_VERSION}
                npm install
                '''
            }
        }
        stage('Build Next.js App') {
            steps {
                sh '''
                . "$NVM_DIR/nvm.sh"
                nvm use ${NODE_VERSION}
                npm run build
                '''
            }
        }
        stage('Run Playwright Tests') {
            steps {
                script {
                    sh '''
                    . "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}
                    npx playwright test
                    '''
                }
            }
        }
    }
    post {
        always {
            // Archive build artifacts (optional)
            archiveArtifacts artifacts: '**/.next/**', fingerprint: true
            // Clean up the workspace to free up space
            cleanWs()
        }
        success {
            // Send success notifications
            echo 'Build was successful!'
            // Example: Sending email (configure mail settings in Jenkins)
            // mail to: 'team@example.com', subject: 'Build Success', body: 'The build was successful.'
            // Example: Slack notification (requires Slack plugin and configuration)
            // slackSend (color: '#00FF00', message: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
        }
        failure {
            // Send failure notifications
            echo 'Build failed!'
            // Example: Sending email (configure mail settings in Jenkins)
            // mail to: 'team@example.com', subject: 'Build Failure', body: 'The build failed. Please check.'
            // Example: Slack notification (requires Slack plugin and configuration)
            // slackSend (color: '#FF0000', message: "FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
        }
        unstable {
            // Handle unstable builds (e.g., some tests failed)
            echo 'Build is unstable!'
            // Additional notifications or actions for unstable builds
        }
        changed {
            // Actions for when the build status changes (e.g., from failure to success)
            echo 'Build status changed!'
            // Notifications or actions for changed status
        }
    }
}
