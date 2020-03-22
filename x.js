
var x = []

way = [0,1,2,3,4,5,6,7,8] 
sub_matrix_range = [0,1,2]

x.push([0,0,0, 0,0,0, 0,0,0])
x.push([1,0,0, 0,0,0, 0,0,0])
x.push([2,0,0, 0,0,0, 0,0,0])

x.push([3,0,0, 0,0,0, 0,0,0])
x.push([0,0,0, 0,0,0, 0,0,0])
x.push([0,0,0, 0,0,0, 0,0,0])

x.push([0,0,0, 0,0,0, 0,0,0])
x.push([0,0,0, 0,0,0, 0,0,0])
x.push([0,0,0, 0,0,0, 0,0,0])


function MatrixIncludesN(n,row=0,column=0)
{
    var gridsconf = new Map()

    gridsconf.set('sg1',{'x':{'i':0,'f':2}, 'y':{'i':0,'f':2}} )
    gridsconf.set('sg2',{'x':{'i':3,'f':5}, 'y':{'i':0,'f':2}} )
    gridsconf.set('sg3',{'x':{'i':6,'f':8}, 'y':{'i':0,'f':2}} )

    gridsconf.set('sg4',{'x':{'i':0,'f':2}, 'y':{'i':3,'f':5}} )
    gridsconf.set('sg5',{'x':{'i':3,'f':5}, 'y':{'i':3,f:5}} )
    gridsconf.set('sg6',{'x':{'i':6,'f':8}, 'y':{'i':3,'f':5}} )

    gridsconf.set('sg7',{'x':{'i':0,'f':2}, 'y':{'i':6,'f':8}} )
    gridsconf.set('sg8',{'x':{'i':3,'f':5}, 'y':{'i':6,'f':8}} )
    gridsconf.set('sg9',{'x':{'i':6,'f':8}, 'y':{'i':6,'f':8}} )


    //if (gridsconf('sg1').get('x').get(i))
    return gridsconf
}


function Insert(n,row=0,column=0)
{
    let exists = false;

    //vefirica se n está presenta na linha
    if (x[row].includes(n))
    {
        console.error("O número informado já existe na linha.");    
    }
    else 

    //verifica se n está presenta na coluna
    for (let i in way)
    {
        if (x[i][column] === n && !exists)
        {
            exists = true;
            console.error("O número informado já existe na coluna.");
            break
        }  
    }

}

