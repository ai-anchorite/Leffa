module.exports = {
  run: [
  
    {
     when: "{{gpu !== 'nvidia'}}",
     method: "notify",
     params: {
       html: "This app requires an NVIDIA GPU."
     }, 
       next: null
    },
    
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/ai-anchorite/Leffa-pinokio app",
        ]
      }
    },
    
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",               
          path: "app",                
        }
      }
    },
    
    {
      method: "shell.run",
      params: {
        venv: "env",               
        path: "app",               
        message: [
          "uv pip install -r requirements.txt"
        ]
      }
    },
    
    {
      method: 'input',
      params: {
        title: 'Installation complete',
        description: 'Click "Start" on the left sidebar to run. Note that Leffa will download 20GB of models on first start. There is a delay, be patient! If downloads are interrupted, just start it again and it will continue.'
      }
    },
  ]
}
