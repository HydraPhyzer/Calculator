let AllBox=document.querySelectorAll('.B');

AllBox.forEach(element => 
{
    element.addEventListener('click' , ()=>
    {
        if(element.innerHTML==='C')
        {
            document.querySelector('.Inp').value='';    
        }
        else if(element.innerHTML==='=')
        {
            try
            {
                let Exp=document.querySelector('.Inp').value;
                if(Exp.search('^')>=0)
                {
                    Exp=Exp.replaceAll('^' , '**');
                }
                let Ans=eval(Exp);
                document.querySelector('.Inp').value=Ans;
            }
            catch
            {
                document.querySelector('.Inp').value="Expression Wrong";
            }
        }
        else
        {
            document.querySelector('.Inp').value+=element.innerHTML;
        }
    });
});

document.querySelector('.form-check-input').addEventListener('click' , ()=>
{
    document.querySelector('.Main').classList.toggle('Dark');
    document.querySelector('body').classList.toggle('Body-Dark');
});