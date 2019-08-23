            function UserAction() {
                const Url = "https://apiv2.streamroot.io/auth/auth/login";
                const mail = 'charles.sonigo+productcandidates@streamroot.io';
                const pw = "y!fC#t2/vR2(#e'";
                const otherParams = {
                    headers : {
                        user: mail,
                        password: pw
                    },
                };
                    fetch(Url, otherParams)
                        .then(response => response.json())
                        .then(json => console.log(json))
            };







                            fetch('https://apiv2.streamroot.io/auth/auth/login',{
                    headers : {
                        'Content-type' : 'application/json'
                    },
                    body: {
                        user: 'charles.sonigo+productcandidates@streamroot.io',
                        password: 'y!fC#t2/vR2(#e\''
                    }
                })
                .then(response => response.json())   
                .then(json => console.log(json))
            };



        