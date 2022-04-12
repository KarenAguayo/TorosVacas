function CompararVaca(codigo,codigoadivina)
{
    {
        var vaca = '*';
        for(var i = 0; i < codigo.length; i++)
        {
            for(var j = 0; j < codigoadivina.length; j++)
            {
                if(codigo[i] == codigoadivina[j])
                {
                    vaca;
                }
            }
        }
        return vaca;
    }  
}
export default CompararVaca;