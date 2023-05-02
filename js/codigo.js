
let clientes = [];

function Cliente(nome, m){
    cliente ={
        nome: nome,
        mesa: m,
        conta: 0.0,
        ant: 0,
        brahL: 0,
        brah: 0,
        agua: 0,
        ref: 0,
        gat: 0,
    }
    clientes.push(cliente);
}

imprimirClientes();
function imprimirClientes() 
	{	
        
        var novadiv = "";
        
    	for (var i = 0; i < clientes.length; i++) 
    	{
        	novadiv = novadiv + "<li class='itens'>"
       		novadiv = novadiv + "<div class='card border-left-success shadow h-100 py-2'>"
        	novadiv = novadiv + "<div class='card-body'>"
        	novadiv = novadiv + "<div class='row no-gutters align-items-center'>"
        	novadiv = novadiv + "<div class='col mr-2'>"
            novadiv = novadiv + "<div style='display: flex; justify-content: space-between;'><p class=' text-sm-start fw-bolder text-success text-uppercase mb-1'>"+ clientes[i].nome +"</p><p class='text-md fw-bolder text-success text-uppercase mb-1'>"+ "Mesa: "+clientes[i].mesa +"</p></div>"
            novadiv = novadiv + "<hr class='hr-cliente'>"
            novadiv = novadiv + "<div style='display: flex; justify-content: space-between; align-items: baseline;' class='form-outline'><label class='form-label' for='ant"+i+"'>R$5 - Antártica Boa 473ml</label><input style='width: 3.5rem;  max='' min='0' value='"+clientes[i].ant+"' onchange='atualiza("+i+")' type='number' id='ant"+i+"' class='form-control'/></div>"
            novadiv = novadiv + "<div style='display: flex; justify-content: space-between; align-items: baseline;' class='form-outline'><label class='form-label' for='brahL"+i+"'>R$6 - Brahma Latão 550ml</label><input style='width: 3.5rem; max='' min='0' value='"+clientes[i].brahL+"' onchange='atualiza("+i+")'type='number' id='brahL"+i+"' class='form-control'/></div>"
            novadiv = novadiv + "<div style='display: flex; justify-content: space-between; align-items: baseline;' class='form-outline'><label class='form-label' for='brah"+i+"'>R$4 - Brahma 310ml</label><input style='width: 3.5rem; max='' min='0' value='"+clientes[i].brah+"' onchange='atualiza("+i+")' type='number' id='brah"+i+"' class='form-control'/></div>"
            novadiv = novadiv + "<div style='display: flex; justify-content: space-between; align-items: baseline;' class='form-outline'><label class='form-label' for='agua"+i+"'>R$2 - Água 500ml</label><input style='width: 3.5rem; max='' min='0' value='"+clientes[i].agua+"' onchange='atualiza("+i+")' type='number' id='agua"+i+"' class='form-control'/></div>"
            novadiv = novadiv + "<div style='display: flex; justify-content: space-between; align-items: baseline;' class='form-outline'><label class='form-label' for='ref"+i+"'>R$4 - Refrigerante 350ml</label><input style='width: 3.5rem; max='' min='0' " +clientes[i].ref+"' value='0' onchange='atualiza("+i+")' type='number' id='ref"+i+"' class='form-control'/></div>"
            novadiv = novadiv + "<div style='display: flex; justify-content: space-between; align-items: baseline;' class='form-outline'><label class='form-label' for='gat"+i+"'>R$6 - Gatorade 500ml</label><input style='width: 3.5rem; max='' min='0' value='"+clientes[i].gat+"' onchange='atualiza("+i+")' type='number' id='gat"+i+"' class='form-control'/></div>"
            novadiv = novadiv + "<div id='conta"+i+"' class='h5 mb-0 font-weight-bold text-gray-800'>"+ "$"+clientes[i].conta +"</div>"
       		novadiv = novadiv + "</div></div></div></div></li>"
    	};
        document.querySelector("#flex-container").innerHTML = novadiv;
    }    

    function novoCliente(){
        nome = document.getElementById("nome").value;
        mesa = document.getElementById("mesa").value;
         if(nome != "" && mesa != ""){
            Cliente(nome, mesa);
            imprimirClientes();
         }else alert("Preencha o nome e a mesa do cliente!")
        
    }

    function atualiza(i){
        clientes[i].ant = document.getElementById("ant"+i).value;
        clientes[i].brahL = document.getElementById("brahL"+i).value;
        clientes[i].brah = document.getElementById("brah"+i).value;
        clientes[i].agua = document.getElementById("agua"+i).value;
        clientes[i].ref = document.getElementById("ref"+i).value;
        clientes[i].gat = document.getElementById("gat"+i).value;
        clientes[i].conta = clientes[i].ant*5.0 + clientes[i].brahL*6.0 + clientes[i].brah*4.0 + clientes[i].agua*2.0 + clientes[i].ref*4.0 + clientes[i].gat*6.0;
        document.getElementById("conta"+i).innerText = "$"+ clientes[i].conta;
    }