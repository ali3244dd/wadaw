function addFavorite(id){$.ajax({url:"/api/addFavorite",type:"POST",data:{id:id},dataType:"html",success:function(data){if(JSON.parse(data)["message"]=="SUCCESS"){location.reload();}else{One.helpers('jq-notify',JSON.parse(data));}},error:function(request,error){One.helpers('jq-notify',{type:'danger',icon:'fa fa-times me-1',message:`Sunucu ile bağlantı kurulamadı.`});}});}
function removeFavorite(id){Swal.fire({target:"#page-container",title:'Favorilerden Kaldırma',text:"Favorilerden kaldırmak istediğine emin misin? İstersen daha sonra tekrardan favorilere ekleyebilirsin.",icon:'question',background:'#121212',color:"white",showCancelButton:true,confirmButtonText:'Eminim, kaldır!',cancelButtonText:'Hayır.'}).then((result)=>{if(result.isConfirmed){$.ajax({url:"/api/removeFavorite",type:"POST",data:{id:id},dataType:"html",success:function(data){if(JSON.parse(data)["message"]=="SUCCESS"){location.reload();}else{One.helpers('jq-notify',JSON.parse(data));}},error:function(request,error){One.helpers('jq-notify',{type:'danger',icon:'fa fa-times me-1',message:`Sunucu ile bağlantı kurulamadı.`});}});}})}
function like(id){$.ajax({url:"/api/like",type:"POST",data:{id:id},dataType:"html",success:function(data){if(JSON.parse(data)["message"]=="SUCCESS"){location.reload();}else{One.helpers('jq-notify',JSON.parse(data));}},error:function(request,error){One.helpers('jq-notify',{type:'danger',icon:'fa fa-times me-1',message:`Sunucu ile bağlantı kurulamadı.`});}});}
function removeLike(id){Swal.fire({target:"#page-container",title:'Beğenilenlerden Kaldırma',text:"Beğenilenlerden kaldırmak istediğine emin misin? İstersen daha sonra tekrardan beğenilenlerine ekleyebilirsin.",icon:'question',background:'#121212',color:"white",showCancelButton:true,confirmButtonText:'Eminim, kaldır!',cancelButtonText:'Hayır.'}).then((result)=>{if(result.isConfirmed){$.ajax({url:"/api/removeLike",type:"POST",data:{id:id},dataType:"html",success:function(data){if(JSON.parse(data)["message"]=="SUCCESS"){location.reload();}else{One.helpers('jq-notify',JSON.parse(data));}},error:function(request,error){One.helpers('jq-notify',{type:'danger',icon:'fa fa-times me-1',message:`Sunucu ile bağlantı kurulamadı.`});}});}})}