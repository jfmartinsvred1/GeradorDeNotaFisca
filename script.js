
function gerarNota(){
var razao = document.getElementById('razao').value;
var endereco = document.getElementById('endereco').value;
var documento = document.getElementById('documento').value;
var inscricao = document.getElementById('inscricao').value;
var data = document.getElementById('data').value;
var descricao = document.getElementById('descricao').value;
var precoUnitario = document.getElementById('precoUnitario').value;
var quantidade = document.getElementById('quantidade').value;
var cliente = document.getElementById('cliente').value;

var valorTot=quantidade*precoUnitario

var iss = valorTot * 0.02

var icms = valorTot * 0.20

var tot = valorTot + iss + icms

document.getElementById('nfRazao').textContent=razao
document.getElementById('nfEndereco').textContent=endereco
document.getElementById('nfCnpj').textContent=documento
document.getElementById('nfInscricao').textContent=inscricao
document.getElementById('nfServico').textContent=descricao
document.getElementById('nfData').textContent=data
document.getElementById('nfValor').textContent=(precoUnitario*1).toFixed(2)
document.getElementById('nfQuantidade').textContent=quantidade
document.getElementById('nfCliente').textContent=cliente
document.getElementById('nfTotal').textContent=(tot.toFixed(2))
document.getElementById('nfIss').textContent=(iss.toFixed(2))
document.getElementById('nfIcms').textContent=(icms.toFixed(2))



document.getElementById('nota').style.display='flex';
document.getElementById('gerador').style.display='none';
}
function mostarGerador(){
document.getElementById('gerador').style.display='block'
document.getElementById('nota').style.display='none';
window.location.reload(true);

}



