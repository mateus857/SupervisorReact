"use client";

import { Table } from "flowbite-react";
import SidebarComponent from "../../sidebar/page";

export default function ProdutosPage() {
  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[500px]">
      <SidebarComponent />
      <div className="flex-1 ml-64 py-10">
        <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">

          <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h1 className="text-2xl font-bold">            Cadastro de Produtos
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie e visualize os produtos cadastrados no sistema.
              </p>
            </main>
          </div>
        </header>
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="flex flex-col justify-center w-full py-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[500px]">
              <Table hoverable className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <Table.Head>
                  <Table.HeadCell className="min-w-[120px]">Código</Table.HeadCell>
                  <Table.HeadCell className="min-w-[80px] hidden md:table-cell">Emp</Table.HeadCell>
                  <Table.HeadCell className="min-w-[200px]">Descrição</Table.HeadCell>
                  <Table.HeadCell className="min-w-[150px] hidden lg:table-cell">Descrição Reduzida</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Diretiva</Table.HeadCell>
                  <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Bal.</Table.HeadCell>
                  <Table.HeadCell className="min-w-[150px] hidden xl:table-cell">Código Barras</Table.HeadCell>
                  <Table.HeadCell className="min-w-[120px] hidden lg:table-cell">Código NCM</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Vasilh.</Table.HeadCell>
                  <Table.HeadCell className="min-w-[60px] hidden lg:table-cell">CST</Table.HeadCell>
                  <Table.HeadCell className="min-w-[80px] hidden xl:table-cell">CST Pis</Table.HeadCell>
                  <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Pis</Table.HeadCell>
                  <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">CST Cofins</Table.HeadCell>
                  <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Cofins</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden lg:table-cell">Cest</Table.HeadCell>
                  <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">CTS</Table.HeadCell>
                  <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Ativo</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Pr.Venda</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Pr.Venda 1</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Pr.Venda 2</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Pr.Venda 3</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Pr.Venda 4</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Pr.Venda 5</Table.HeadCell>
                  <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Oferta</Table.HeadCell>
                  <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Pr.Normal</Table.HeadCell>
                  <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Cod Tiaa</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell className="hidden md:table-cell">Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">Macbook Pro</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">12345</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">10</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">123456789012</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">12345678</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">Vasilh Info</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">01</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">05</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">1.65%</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">07</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">3.00%</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">12345</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">98765</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">Ativo</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">$2999</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">$2899</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">$2799</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">$2699</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">$2599</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">Sim</Table.Cell>
                    <Table.Cell className="hidden xl:table-cell">$2999</Table.Cell>
                    <Table.Cell className="hidden lg:table-cell">001234</Table.Cell>
                            </Table.Row>
                  {/* Repita este padrão para outras linhas da tabela */}
                </Table.Body>
              </Table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 mx-auto">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
          Alterar
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            Cancelar
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            Localizar
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            Alterar Preços
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            Filtro
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            Ordenar
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            At Dados
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            Relatório
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
            Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
