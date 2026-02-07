document.addEventListener("DOMContentLoaded", async()=>{
    const total_users=document.getElementById("totalUsers");
try {
    const res = await fetch('/admin/users/count',{
        method: 'get', 
        headers: {
            'content-type': 'application/json'},
            credentials: 'include'
    }) 
    const data = await res.json();
    if(!res.ok)
    {
        throw new error(data.message|| 'failed to fetch total user count');
    }
    total_users.innerHTML=data.totalUsers;
}catch(err)
{
    alert("error:", err);
}
});



document.addEventListener("DOMContentLoaded", async()=>{
    const totalProducts=document.getElementById("totalProducts");
try {
    const res = await fetch('/admin/products/count',{
        method: 'get', 
        headers: {
            'content-type': 'application/json'},
            credentials: 'include'
    }) 
    const data = await res.json();
    if(!res.ok)
    {
        throw new error(data.message|| 'failed to fetch total user count');
    }
    totalProducts.innerHTML=data.totalProducts;
}catch(err)
{
    alert("error:", err);
}
});