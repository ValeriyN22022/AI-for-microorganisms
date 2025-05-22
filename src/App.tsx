import './App.css'

function App() {

  return (
    <>
    <header>
        <div className="container">
            <nav>
                <div className="logo">AI<span>Microscope</span></div>
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
            
            <div className="upload-container">
                <button className="upload-btn" id="uploadBtn">
                    <i className="fas fa-cloud-upload-alt"></i>
                    ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ
                </button>
            </div>
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
                    <h3>Точное обнаружение</h3>
                    <p>Наш ИИ точно идентифицирует различные виды микроорганизмов с высокой точностью</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                    <h3>Анализ параметров</h3>
                    <p>Автоматическое измерение размеров, форм и других характеристик микроорганизмов</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-database"></i>
                    </div>
                    <h3>Коллекционирование</h3>
                    <p>Создавайте свою коллекцию обнаруженных микроорганизмов для дальнейшего изучения</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">AI<span>Microscope</span></div>
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
