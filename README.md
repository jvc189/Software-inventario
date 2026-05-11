# Software-inventario
Validação de Projeto: Sistema de  
Gerenciamento de Inventário de 
Hardware 

Nomes: João Vitor, Luiz e Júlio Cesar  
1. Validação da Fase de Desenvolvimento  
1. Information Gerai
     
Projeto: Sistema de Gerenciamento de Inventário de Hardware  
Responsável pela validação: João Vitor 
Data: 11/05/2026

3. Objetivo
Garantir que os requisitos funcionais de cadastro de equipamentos e organização do banco de 
dados MySQL foram implementados corretamente.  

4. Escopo da Validação  
Funcionalidades desenvolvidas: Cadastro de hardware, consulta de estoque, integração com 
MySQL Workbench.  
Módulos envolvidos: Módulo de Inventário, Banco de Dados, Interface Web.  
Itens fora do escopo: Integração com sistemas externos de vendas.  

5. Critérios de Aceitação  
● Requisitos funcionais (cadastro/edição) atendidos.  
● Padrões de codificação seguidos em JavaScript.  
● Conexão estável com o banco de dados MySQL.  

6. Evidências  
Documentação técnica em HTML/CSS, código-fonte revisado e scripts SQL.  

7. Resultados da Validação  
Item Cadastro        Status (OK/NOK)  NOK    Validado via MySQLWorkbench  


2. Validação da Fase de Teste  
1. Informações Gerais
   
Responsável: João Vitor
Data: 
11/05/2026

4. Objetivo  
Validar que o sistema atende aos requisitos por meio de testes unitários e de integração.

6. Casos de Teste  
ID  
Descrição / Resultado  
Esperado  
Resultado Obtido  
Status  
TC01  
Conversão de binário 
para Hexadecimal para 
IDs internos.  
Conversão exata 
conforme lógica 
matemática.  
TC02  
Tentativa de cadastro 
sem nome de 
equipamento (Erro).  
Sistema envia. 
(Corrigir erro) .  
APROVADO  
Em processo 
3. Validação da Fase de Implementação  
1. Checklist de Implementação  

Item  
Descrição  
Status  
Backup realizado  
Observações  
Dump do banco  
MySQL  
OK  
Realizado via  
Workbench  
Deploy executado  
Upload para servidor 
de homologação  
Em andamento 
Arquivos estruturados 
para o GitHub
 
3. Plano de Rollback  
Descrição: Restaurar a versão estável anterior através do Git em caso de falha crítica no 
deploy.  
Tempo estimado: 2 horas.

4. Conclusão Final
    
() Conclusão em andamento 
Aprovação: João Vitor, Luiz e Júlio Cesar - Desenvolvedores Responsáveis  
