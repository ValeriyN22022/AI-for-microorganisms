import './App.css'
const logoImg = '../public/logo.svg'
import ImageUploadForm from './ImageUploadForm';

function App() {

  return (
    <>
    <header>
        <div className="container">
            <nav>
                <div className="logo">
                        <img  src={logoImg} className="logo-img" alt="logo" />
                    AI<span>Microscope</span>
                </div>
                <div className="nav-links">
                    <a href="#" className="active">Главная</a>
                    <a href="#">Добавленные изображения</a>
                    <a href="#">Увидеть результат</a>
                </div>
            </nav>
        </div>
    </header>

    <section className="hero">
        <div className="container">
            <h1>Обнаружение микроорганизмов с помощью ИИ</h1>
            <p>Данный интерфейс предлагает доступ к искусственному интеллекту для обнаружения и коллекционирования различных микроорганизмов, их видов, форм и размеров.</p>
            <p>Вы можете загрузить свои фотографии микроорганизмов для того чтобы наш искусственный интеллект их обработал и сэкономил ваше время и силы.</p>
            
            <ImageUploadForm/>
        </div>
    </section>

    <section className="features">
        <div className="container">
            <h2>Наши возможности</h2>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-microscope"></i>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <rect x="40" y="60" width="120" height="80" rx="5" fill="#d1fae5"></rect>
                            <rect x="50" y="70" width="100" height="60" rx="3" fill="#a7f3d0"></rect>
                            <rect x="60" y="80" width="80" height="40" rx="2" fill="#6ee7b7"></rect>
                            <circle cx="150" cy="70" r="10" fill="#34d399"></circle>
                            <circle cx="50" cy="130" r="8" fill="#34d399"></circle>
                    </svg>
                    <h3>Точное обнаружение</h3>
                    <p>Наш ИИ точно идентифицирует различные виды микроорганизмов с высокой точностью</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#8b5cf6"></path>
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#3498db" fill-opacity="0.4"></path>
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#3498db" fill-opacity="0.4"></path>
                                <path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" fill="#3498db" fill-opacity="0.4"></path>
                                <path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#3498db" fill-opacity="0.4"></path>
                                <path d="M16.9497 8.05025C18.0543 8.05025 18.9497 7.15482 18.9497 6.05025C18.9497 4.94568 18.0543 4.05025 16.9497 4.05025C15.8452 4.05025 14.9497 4.94568 14.9497 6.05025C14.9497 7.15482 15.8452 8.05025 16.9497 8.05025Z" fill="#a7f3d0" fill-opacity="0.7"></path>
                                <path d="M7.05025 8.05025C8.15482 8.05025 9.05025 7.15482 9.05025 6.05025C9.05025 4.94568 8.15482 4.05025 7.05025 4.05025C5.94568 4.05025 5.05025 4.94568 5.05025 6.05025C5.05025 7.15482 5.94568 8.05025 7.05025 8.05025Z" fill="#a7f3d0" fill-opacity="0.7"></path>
                                <path d="M16.9497 19.9497C18.0543 19.9497 18.9497 19.0543 18.9497 17.9497C18.9497 16.8452 18.0543 15.9497 16.9497 15.9497C15.8452 15.9497 14.9497 16.8452 14.9497 17.9497C14.9497 19.0543 15.8452 19.9497 16.9497 19.9497Z" fill="#a7f3d0" fill-opacity="0.7"></path>
                                <path d="M7.05025 19.9497C8.15482 19.9497 9.05025 19.0543 9.05025 17.9497C9.05025 16.8452 8.15482 15.9497 7.05025 15.9497C5.94568 15.9497 5.05025 16.8452 5.05025 17.9497C5.05025 19.0543 5.94568 19.9497 7.05025 19.9497Z" fill="#a7f3d0" fill-opacity="0.7"></path>
                    </svg>
                    <h3>Анализ параметров</h3>
                    <p>Автоматическое измерение размеров, форм и других характеристик микроорганизмов</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-database"></i>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <path d="M50,100 Q100,50 150,100 T250,100" fill="none" stroke="#c4b5fd" stroke-width="10"></path>
                            <path d="M50,120 Q100,70 150,120 T250,120" fill="none" stroke="#a78bfa" stroke-width="8"></path>
                            <path d="M50,140 Q100,90 150,140 T250,140" fill="none" stroke="#8b5cf6" stroke-width="6"></path>
                            <circle cx="70" cy="100" r="15" fill="#7c3aed"></circle>
                            <circle cx="130" cy="100" r="12" fill="#7c3aed"></circle>
                    </svg>
                    <h3>Коллекционирование</h3>
                    <p>Создавайте свою коллекцию обнаруженных микроорганизмов для дальнейшего изучения</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo"><img src={logoImg} className="logo-img" alt="" /> AI<span>Microscope</span></div>
                <div className="footer-links">
                    <a href="#">Главная</a>
                    <a href="#">О проекте</a>
                    <a href="#">Контакты</a>
                    <a href="#">Политика конфиденциальности</a>
                </div>
                <div className="copyright">
                    © 2023 AI Microscope. Все права защищены.
                </div>
            </div>
        </div>
    </footer>

    <div className="modal" id="uploadModal">
        <div className="modal-content">
            <span className="close-modal" id="closeModal">&times;</span>
            <h2>Загрузка изображения</h2>
            <p>Перетащите сюда файл или нажмите для выбора</p>
            <div className="drag-drop-area" id="dropArea">
                <i className="fas fa-cloud-upload-alt blue"></i>
                <p>Форматы: JPG, PNG, TIFF</p>
                <p>Максимальный размер: 10MB</p>
            </div>
            <button className="upload-btn center">
                <i className="fas fa-upload"></i>
                Выбрать файл
            </button>
        </div>
    </div>
    </>
  )
}

export default App
