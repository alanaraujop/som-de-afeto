import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '@/components/ExternalLink';

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
            <div className="logo">
                <h1>Som de Afeto</h1>
                <p>Músicas que tocam o coração</p>
            </div>
            <div className="menu-toggle">
                <i className="fas fa-bars"></i>
            </div>
            <nav className="desktop-nav">
                <ul>
                    <li><Link href="#sobre">Sobre</Link></li>
                    <li><Link href="#como-funciona">Como Funciona</Link></li>
                    <li><Link href="#preco">Preço</Link></li>
                    <li><Link href="#contato" className="btn-destaque">Encomendar</Link></li>
                </ul>
            </nav>
        </div>
    </header>

    <div className="sidemenu">
        <div className="sidemenu-close">
            <i className="fas fa-times"></i>
        </div>
        <div className="sidemenu-content">
            <div className="sidemenu-logo">
                <h3>Som de Afeto</h3>
                <p>Músicas que tocam o coração</p>
            </div>
            <nav className="mobile-nav">
                <ul>
                    <li><Link href="#sobre">Sobre</Link></li>
                    <li><Link href="#como-funciona">Como Funciona</Link></li>
                    <li><Link href="#preco">Preço</Link></li>
                    <li><Link href="#contato" className="btn-destaque">Encomendar</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    <div className="overlay"></div>

    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <h2>Transforme seus sentimentos em música</h2>
                <p>Criamos músicas personalizadas para casamentos, chás de revelação, aniversários e surpresas para pessoas especiais.</p>
                <Link href="#contato" className="btn-principal">Quero uma música única</Link>
            </div>
        </div>
    </section>

    <section id="sobre" className="sobre">
        <div className="container">
            <h2>Sobre o Som de Afeto</h2>
            <div className="sobre-content">
                <div className="sobre-texto">
                    <p>O Som de Afeto nasceu da paixão por transformar histórias de amor e momentos especiais em canções únicas e emocionantes.</p>
                    <p>Cada música é cuidadosamente composta para capturar a essência dos seus sentimentos e criar memórias que durarão para sempre.</p>
                    <p>Nosso time de compositores e músicos profissionais trabalha com dedicação para criar a trilha sonora perfeita para os momentos mais importantes da sua vida.</p>
                </div>
                <div className="sobre-imagem">
                    <Image 
                      src="/images/casal-feliz.jpg" 
                      alt="Casal emocionado ouvindo música"
                      width={500}
                      height={350}
                      style={{ maxWidth: '100%', height: 'auto' }}
                      className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    </section>

    <section id="como-funciona" className="como-funciona">
        <div className="container">
            <h2>Como Funciona</h2>
            <div className="passos">
                <div className="passo">
                    <div className="passo-numero">1</div>
                    <h3>Conte sua história</h3>
                    <p>Preencha nosso formulário com detalhes sobre a história que deseja transformar em música e envie uma referência musical.</p>
                </div>
                <div className="passo">
                    <div className="passo-numero">2</div>
                    <h3>Criação personalizada</h3>
                    <p>Nossa equipe compõe uma música única baseada na sua história e referências musicais.</p>
                </div>
                <div className="passo">
                    <div className="passo-numero">3</div>
                    <h3>Aprovação</h3>
                    <p>Você recebe a música para aprovação. Só paga se gostar do resultado!</p>
                </div>
                <div className="passo">
                    <div className="passo-numero">4</div>
                    <h3>Entrega final</h3>
                    <p>Após aprovação, você recebe a versão final da sua música personalizada para eternizar seu momento especial.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="galeria">
        <div className="container">
            <h2>Momentos Emocionantes</h2>
            <div className="imagens">
                <div className="imagem">
                    <Image 
                      src="/images/casamento.jpg" 
                      alt="Casal em casamento"
                      width={400}
                      height={250}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      className="rounded-none"
                    />
                </div>
                <div className="imagem">
                    <Image 
                      src="/images/cha-revelacao.jpg" 
                      alt="Família em chá de revelação"
                      width={400}
                      height={250}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      className="rounded-none"
                    />
                </div>
                <div className="imagem">
                    <Image 
                      src="/images/aniversario.jpg" 
                      alt="Celebração de aniversário"
                      width={400}
                      height={250}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      className="rounded-none"
                    />
                </div>
                <div className="imagem">
                    <Image 
                      src="/images/surpresa.jpg" 
                      alt="Momento de surpresa"
                      width={400}
                      height={250}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      className="rounded-none"
                    />
                </div>
            </div>
        </div>
    </section>

    <section id="preco" className="preco">
        <div className="container">
            <h2>Investimento</h2>
            <div className="preco-card">
                <div className="preco-original">
                    <span className="riscado">R$ 399</span>
                </div>
                <div className="preco-promocional">
                    <span className="valor">R$ 199</span>
                    <span className="destaque">Oferta por tempo limitado!</span>
                </div>
                <div className="garantia">
                    <p><strong>Garantia de satisfação:</strong> Você só paga se gostar do resultado!</p>
                </div>
                <Link href="#contato" className="btn-principal">Quero minha música personalizada</Link>
            </div>
        </div>
    </section>

    <section id="contato" className="contato">
        <div className="container">
            <h2>Encomende Sua Música</h2>
            <form id="formulario-musica">
                <div className="form-grupo">
                    <label htmlFor="nome">Seu Nome</label>
                    <input type="text" id="nome" name="nome" required/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="email">Seu E-mail</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-grupo">
                    <label htmlFor="ocasiao">Ocasião</label>
                    <select id="ocasiao" name="ocasiao" required>
                        <option value="">Selecione uma opção</option>
                        <option value="Casamento">Casamento</option>
                        <option value="Chá de Revelação">Chá de Revelação</option>
                        <option value="Aniversário">Aniversário</option>
                        <option value="Surpresa">Surpresa para alguém especial</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
                <div className="form-grupo">
                    <label htmlFor="historia">Conte a história que deseja transformar em música</label>
                    <textarea id="historia" name="historia" rows={6} required></textarea>
                </div>
                <div className="form-grupo">
                    <label htmlFor="referencia">Link do YouTube com uma música de referência</label>
                    <input type="url" id="referencia" name="referencia" placeholder="https://www.youtube.com/watch?v=..." required/>
                </div>
                <button type="submit" className="btn-principal">Enviar para o WhatsApp</button>
            </form>
        </div>
    </section>

    <section className="depoimentos">
        <div className="container">
            <h2>O Que Nossos Clientes Dizem</h2>
            <div className="depoimentos-lista">
                <div className="depoimento">
                    <div className="estrelas">★★★★★</div>
                    <p>"A música que criaram para nosso casamento foi simplesmente perfeita! Todos os convidados se emocionaram. Valeu cada centavo!"</p>
                    <div className="cliente">
                        <Image 
                          src="/images/cliente1.jpg" 
                          alt="Cliente"
                          width={50}
                          height={50}
                          style={{ objectFit: 'cover' }}
                          className="rounded-full mr-[15px]"
                        />
                        <span>Maria e João</span>
                    </div>
                </div>
                <div className="depoimento">
                    <div className="estrelas">★★★★★</div>
                    <p>"Encomendei uma música para o aniversário da minha mãe e ela chorou de emoção. Uma lembrança que ficará para sempre em nossos corações."</p>
                    <div className="cliente">
                        <Image 
                          src="/images/cliente2.jpg" 
                          alt="Cliente"
                          width={50}
                          height={50}
                          style={{ objectFit: 'cover' }}
                          className="rounded-full mr-[15px]"
                        />
                        <span>Carlos Silva</span>
                    </div>
                </div>
                <div className="depoimento">
                    <div className="estrelas">★★★★★</div>
                    <p>"O chá de revelação ficou ainda mais especial com a música personalizada. Todos perguntaram como conseguimos algo tão único!"</p>
                    <div className="cliente">
                        <Image 
                          src="/images/cliente3.jpg" 
                          alt="Cliente"
                          width={50}
                          height={50}
                          style={{ objectFit: 'cover' }}
                          className="rounded-full mr-[15px]"
                        />
                        <span>Ana e Pedro</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="logo-footer">
                    <h3>Som de Afeto</h3>
                    <p>Músicas que tocam o coração</p>
                </div>
                // In the footer section:
                <div className="contato-footer">
                  <h4>Entre em contato</h4>
                  <p><ExternalLink href="https://wa.me/5521984623153">WhatsApp: (21) 98462-3153</ExternalLink></p>
                  <p>contato@somdeafeto.com.br</p>
                </div>
                <div className="redes-sociais">
                  <h4>Siga-nos</h4>
                  <div className="icones">
                    <ExternalLink href="#" className="social-icon"><i className="fab fa-instagram"></i></ExternalLink>
                    <ExternalLink href="#" className="social-icon"><i className="fab fa-facebook"></i></ExternalLink>
                    <ExternalLink href="#" className="social-icon"><i className="fab fa-youtube"></i></ExternalLink>
                  </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 Som de Afeto. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    </footer>

    </>
  );
}
