  const API = 'https://aad3-2804-1254-8160-8800-b83b-bb53-b9c4-9091.sa.ngrok.io/thservicesApiRest/public/';

export default {

    //Auth
    checkToken:async (token) => {
        const req = await fetch(`${API}api/auth/refresh`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({token})
           });
           
       const json = await req.json();
       return json;
       
    },


    SignIn:async (email, password) => {
       const req = await fetch(`${API}api/auth/login`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email,password})

       });
       
       const json = await req.json();
       return json;
       
    },

    SignUp:async ( name, email, password, photo) => {
        const req = await fetch(`${API}api/auth/register`,{
           method:'POST',
           headers:{
           Accept: 'application/json',
                   'Content-Type': 'application/json'
           },
           body:JSON.stringify({name, email, password, photo})
        });
        const json = await req.json();
        console.log(json);
        return json;
     },

    logout:async (token) => {
       const req = await fetch(`${API}api/auth/logout`, {
         method: 'POST',
         headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
         }
       });
       const json = await req.json();
       return json;  
     },
     
     getAuth: async (token) => {
        const req = await fetch(`${API}api/user`, {
            method: 'GET',
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':` Bearer ${token}`
                },          
        })
        const json = await req.json();
        return json;
    },
    // End Auth

    //Cient
    getClient: async (id, token) => {
       
        const req = await fetch(`${API}api/page/client/${id}`, {
            method: 'GET',
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization':` Bearer ${token}` 
                },         
        })
        const json = await req.json();
        return json;
    },
    //End Client

    //Testimonial
      getTestimonial: async (ClientId) =>{
        const req = await fetch(`${API}api/page/commentary/${ClientId}`, {
            method: 'GET',
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },     
        });
        const json = await req.json();
        return json;
      },
    //End

    // Company
    getCompany: async (client_id, token) => { 
        const req = await fetch(`${API}api/page/company/${client_id}`, {
            method: 'GET',
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':` Bearer ${token}`
                },            
        })
        const json = await req.json();
        return json;
    },
    //End company


    //Public announcement
    getAnnouncements: async () => {
        const req = await fetch(`${API}api/page/announcement`, {
            method: 'GET',
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',  
                },         
        })
        const json = await req.json();
        return json;
    },

    getAnnouncement: async (search) => {
        const req = await fetch(`${API}/page/announcement/${search}`, {
            method: 'GET',
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',    
                }       
        });
        const json = await req.json();
        return json;   
    },
    //End public announcement


   //Favorite
    getFavorite: async (id, token) => {
        const req = await fetch(`${API}api/page/favorite/${id}`, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization':` Bearer ${token}`
            }

              
        });
        const json = await req.json();
        return json; 
    },

    deleteFavorite: async (id, token) => {
        const req = await fetch(`${API}api/page/favorite/${id}`, {
            method: 'DELETE',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization':` Bearer ${token}`
            },
             
        });
        const json = await req.json();
        return json;   
    },

    CreateFavorite: async (title, img, user_id, token) => {
        const req = await fetch(`${API}api/page/favorite`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization':` Bearer ${token}`
            },
            body:JSON.stringify({title, img, user_id})
        });
        const json = await req.json();
        return json;   
    },

    //End favorite
    createGallery: async (imgOne, token) =>{
      const req = await fetch(`${API}api/page/gallery`,{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json",
            'Authorization':` Bearer ${token}`
        },
        body:JSON.stringify({imgOne})
      });
     
      const json = await req.json();
      return json; 
    }, 

    getGallery: async (client_id, token) =>{
        const req = await fetch(`${API}api/page/gallery/${client_id}`,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                "Content-Type": "application/json",
                'Authorization':` Bearer ${token}`
            },
          });
         
          const json = await req.json();
          return json; 
    },

    getGeolocalization: async (companie_id, token ) => {
        const req = await fetch(`${API}api/page/geolocalization/${companie_id}`, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                "Content-Type": "application/json",
                'Authorization':` Bearer ${token}`
            },

        });
        const json = await req.json();
        return json;
    },

    //Geolocalization
    CreateGeolocalization: async ( latitude, longitude, companie_id, token ) => {
        const req = await fetch(`${API}api/page/geolocalization`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                "Content-Type": "application/json",
                'Authorization':` Bearer ${token}`
            },
            body:JSON.stringify({latitude, longitude, companie_id})

        });
        const json = await req.json();
        return json;

    },   
//End

//Schedule
    createSchedule: async (date, time, descrition, client_id, authClient_id, status, token) => {
         const req = await fetch(`${API}api/page/schedule`, {
            method: 'POST',
            headers:{
                 Accept: 'application/json',
                 "Content-Type": "application/json",
                 'Authorization':` Bearer ${token}`
            },
            body:JSON.stringify({date, time, descrition, client_id, authClient_id, status})
         });

         const json = await req.json();
         return json;
    },

    getShedules: async(authClient_id, token)=>{
        const req = await fetch(`${API}api/page/schedule/${authClient_id}`, {
            method: 'GET',
            headers:{
                 Accept: 'application/json',
                 "Content-Type": "application/json",
                 'Authorization':` Bearer ${token}`
            },
        
        });
        const json = await req.json();
        return json;
    }
    //End
}


export {API}
