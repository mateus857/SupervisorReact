"use client";

import { Table } from "flowbite-react";
import SidebarComponent from "../../sidebar/page";

export default function EntidadesPage() {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[500px]">
            <SidebarComponent />
            <div className="flex-1 ml-64 py-10">
                <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">

                    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <main className="p-4">
                            <h1 className="text-2xl font-bold">            Cadastro de Entidades
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Gerencie e visualize as entidades cadastradas no sistema.
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
                                    <Table.HeadCell className="min-w-[80px] hidden md:table-cell">Sit</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[200px]">Nome</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[150px] hidden lg:table-cell">Autoriz</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Cod. Sit</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">FJ</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[150px] hidden xl:table-cell">CNPJ/CPF</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[120px] hidden lg:table-cell">Razão Social</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Insc.Est</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[60px] hidden lg:table-cell">RG</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[80px] hidden xl:table-cell">Endereço</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Complemento</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Número</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Bairro</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden lg:table-cell">Cod. Ibge</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[60px] hidden xl:table-cell">Município</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">UF</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">CEP</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Email</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Fone</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Cartão</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Limite Ch</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Limite Cred</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Saldo Cred.</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[100px] hidden xl:table-cell">Saldo Cheq.</Table.HeadCell>
                                    <Table.HeadCell className="min-w-[80px] hidden lg:table-cell">Cod. Preço</Table.HeadCell>
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
                            Incluir
                        </button>
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
