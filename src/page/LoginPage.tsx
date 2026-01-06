import '../styles/LoginPage.css';

const LoginPage = () => {
    return (
        <div className="container">
            <div className="contents">
                <section className="hero">
                    <h2 className="hero-title">
                        지금 로그인 하고 <br />
                        최적의 모니터링 환경을 <br />
                        경험하세요.
                    </h2>
                    <p className="hero-sub">Mobile Performance<br />Management Solution</p>
                </section>

                <section className="login">
                    <form className="login-form">
                        <div className="field">
                            <label htmlFor="username">UserName</label>
                            <input id="username" type="text" placeholder="아이디를 입력하세요." />
                        </div>

                        <div className="field">
                            <label htmlFor="password">PassWord</label>
                            <input id="password" type="password" placeholder="비밀번호를 입력하세요." />
                        </div>

                        <label className="check">
                            <input type="checkbox" />
                            아이디 저장
                        </label>

                        <button className="btn" type="submit">Login</button>
                    </form>
                </section>
            </div>
        </div>

    )
}

export default LoginPage;