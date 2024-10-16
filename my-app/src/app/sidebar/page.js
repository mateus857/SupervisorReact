// app/sidebar/page.js
"use client";
import { ClipboardIcon, CogIcon, DocumentReportIcon, LogoutIcon, HomeIcon } from '@heroicons/react/outline';
import { Sidebar } from "flowbite-react";
import { usePathname } from 'next/navigation'; // Hook para obter a rota no novo sistema de roteamento
import Link from 'next/link';
import { useState } from 'react';

export default function SidebarComponent() {
  const pathname = usePathname(); // Hook para obter a rota atual
  const isActive = (href) => pathname === href; // Função para verificar se a rota é ativa
  const [openMenu, setOpenMenu] = useState(null); // Menu aberto atual

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };
  

  return (
    <Sidebar aria-label="Sidebar with modern styling" className="fixed top-0 left-0 h-screen bg-white shadow-lg">
      <Sidebar.Logo href="/home">
        Unity Sistemas
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/home"
            icon={HomeIcon}
            className={`${isActive('/home') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Home
          </Sidebar.Item>
          {/* teste */}

          <Sidebar.Collapse icon={ClipboardIcon} label="Cadastros">
            <Link href="/cadastros/produtos" passHref>
              <Sidebar.Item
                className={`${isActive('/cadastros/produtos') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Produtos
              </Sidebar.Item>
            </Link>
            <Link href="/cadastros/entidades" passHref>
              <Sidebar.Item
                className={`${isActive('/cadastros/entidades') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Entidades
              </Sidebar.Item>
            </Link>
            <Link href="/cadastros/grupo_usuarios" passHref>
              <Sidebar.Item
                className={`${isActive('/cadastros/grupo_usuarios') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Grupo Usuários
              </Sidebar.Item>
            </Link>
            <Link href="/cadastros/usuarios" passHref>
              <Sidebar.Item
                className={`${isActive('/cadastros/usuarios') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Usuários
              </Sidebar.Item>
            </Link>
          </Sidebar.Collapse>

          <Sidebar.Item
            href="/processos"
            icon={CogIcon}
            className={`${isActive('/processos') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Processos
          </Sidebar.Item>
          <Sidebar.Item
            href="/relatorios"
            icon={DocumentReportIcon}
            className={`${isActive('/relatorios') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Relatórios
          </Sidebar.Item>
          {/* <Sidebar.Item
            href="/#"
            icon={CogIcon}
            className={`${isActive('/#') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Parâmetros
          </Sidebar.Item> */}
          <Sidebar.Collapse icon={CogIcon} label="Parâmetros">
            <Sidebar.Item href="#">Configuração Geral</Sidebar.Item>
            <Sidebar.Item href="#">Configuração Empresa</Sidebar.Item>
            <Sidebar.Item href="#">Processa Excepcionais</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item
            href="/"
            icon={LogoutIcon}
            className="text-gray-600 hover:bg-gray-100"
          >
            Sair
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
