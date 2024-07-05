pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        nodejs(cacheLocationStrategy: workspace(), nodeJSInstallationName: 'Nodejs16') {
        sh '''ls
pwd
rm -rf build/
rm -rf clientbuild.tar.gz
npm install --force
npm run build
ls -la
mv dist build
tar cvf clientbuild.tar.gz build
ls'''
      }
    }
 }
  
    
    
        stage('Upload Build') {
          steps {
            sshPublisher(publishers: [sshPublisherDesc(configName: '6sense', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''sudo rm -rf /var/www/frontend/build
sudo tar -xf /home/ubuntu/clientbuild.tar.gz -C /var/www/frontend/
rm -rf /home/ubuntu/clientbuild.tar.gz''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'clientbuild.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
          }
        }

  }

  
    post { 
    always {
        dir("${env.WORKSPACE}@tmp") {
            deleteDir()
        }
    }
    }
}
