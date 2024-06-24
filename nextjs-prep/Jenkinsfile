pipeline {
    agent any  
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', 
                    url: 'https://github.com/sousa16/internship-prep' 
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Or 'yarn install' depending on your package manager
            }
        }
        stage('Build Next.js App') {
            steps {
                sh 'npm run build' // Or 'yarn build'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                script {
                    sh 'npx playwright test' // Or 'npm run test:playwright' if you have a custom script
                }
            }
        }
    }
    post {
    always {
        // Archive build artifacts (optional)
        archiveArtifacts artifacts: '**/*.next/**', fingerprint: true
        // Clean up the workspace to free up space
        cleanWs()
    }
    success {
        // Send success notifications
        // This could be an email, Slack message, etc., depending on your setup
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