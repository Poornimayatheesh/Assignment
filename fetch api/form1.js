fetch('https://api.github.com/orgs/google/repos')
.then(res => res.json())
.then(data =>{
    const tableData = document.getElementById('table-data')
    tableData.innerHTML +=''
     
        // data.forEach(ele => {
        //     let tableData1 = document.createElement('tr')

        //     tableData1.innerHTML +=`
        //             <td>${ele.url}</td>
        //                   <td>${ele.language}</td>
        //                  <td>${ele.git_url}</td>
        //                  <td>${ele.updated_at}</td>`
        //                  tableData.appendChild(tableData1)
        // })
       

        // let js = data.filter( ele => ele.language == 'JavaScript')
        // js.map(ele =>{
        //     let tableData1 = document.createElement('tr')

        //     tableData1.innerHTML +=`
        //             <td>${ele.url}</td>
        //                   <td>${ele.language}</td>
        //                  <td>${ele.git_url}</td>
        //                  <td>${ele.updated_at}</td>`
        //                  tableData.appendChild(tableData1)
        // })
        
        let js = data.filter( ele => ele.language == 'JavaScript')
        for(let i =0; i<js.length; i++){
            if(i<4){
                let ele = js[i]
                let tableData1 = document.createElement('tr')

                tableData1.innerHTML +=`
                    <td>${ele.url}</td>
                          <td>${ele.language}</td>
                         <td>${ele.git_url}</td>
                         <td>${ele.updated_at}</td>`
                         tableData.appendChild(tableData1)
            }else{
                break;
            }
        }
    
})