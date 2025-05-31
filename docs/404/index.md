# 🔍 Page Not Found

<div class="error-page" style="text-align: center; padding: 4rem 2rem; max-width: 600px; margin: 0 auto;">
    <div class="error-animation" style="font-size: 8rem; margin-bottom: 2rem; opacity: 0.7; animation: pulse 2s infinite;">
        🤖
    </div>
    
    <h1 style="font-size: 3rem; margin-bottom: 1rem; background: linear-gradient(135deg, #ef4444, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        404
    </h1>
    
    <h2 style="font-size: 1.5rem; color: #cbd5e1; margin-bottom: 2rem; font-weight: 400;">
        Oops! This page seems to have wandered off into the digital void.
    </h2>
    
    <p style="color: #94a3b8; font-size: 1.1rem; line-height: 1.6; margin-bottom: 3rem;">
        Don't worry, even the best algorithms sometimes take a wrong turn. Let's get you back on track to exploring our technical excellence.
    </p>
    
    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem;">
        <a href="/" class="enhanced-button interactive-element" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; border-radius: 0.5rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);">
            🏠 Go Home
        </a>
        <a href="/zh/chapter_preface/" class="enhanced-button interactive-element" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white; border-radius: 0.5rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);">
            📚 Browse Articles
        </a>
    </div>
    
    <div class="search-suggestion" style="background: rgba(37, 99, 235, 0.1); border: 1px solid rgba(37, 99, 235, 0.3); border-radius: 0.75rem; padding: 2rem; margin-top: 2rem;">
        <h3 style="color: #2563eb; margin-bottom: 1rem;">🔍 Quick Search</h3>
        <p style="color: #94a3b8; margin-bottom: 1rem;">Try searching for what you're looking for:</p>
        <div style="position: relative;">
            <input type="text" placeholder="Search for Spring Boot, Kubernetes, etc..." style="width: 100%; padding: 1rem; border: 1px solid rgba(71, 85, 105, 0.3); border-radius: 0.5rem; background: rgba(15, 23, 42, 0.5); color: #f1f5f9; font-size: 1rem;" onkeypress="if(event.key==='Enter') window.location.href='/?q=' + encodeURIComponent(this.value)">
        </div>
    </div>
    
    <div class="popular-links" style="margin-top: 3rem; text-align: left;">
        <h3 style="color: #2563eb; margin-bottom: 1.5rem; text-align: center;">🔥 Popular Topics</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <a href="/zh/chapter_springboot/1-sample/" style="display: block; padding: 1rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 0.5rem; color: #10b981; text-decoration: none; transition: all 0.3s ease;">
                <strong>🍃 Spring Boot</strong><br>
                <small style="color: #94a3b8;">Framework fundamentals</small>
            </a>
            <a href="/zh/chapter_kubernetes/1-index/" style="display: block; padding: 1rem; background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 0.5rem; color: #06b6d4; text-decoration: none; transition: all 0.3s ease;">
                <strong>☸️ Kubernetes</strong><br>
                <small style="color: #94a3b8;">Container orchestration</small>
            </a>
            <a href="/zh/chapter_dubbo/1-learn-from-a-demo/" style="display: block; padding: 1rem; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 0.5rem; color: #f59e0b; text-decoration: none; transition: all 0.3s ease;">
                <strong>🔄 Dubbo</strong><br>
                <small style="color: #94a3b8;">Microservices framework</small>
            </a>
            <a href="/zh/chapter_kafka/1-introduce/" style="display: block; padding: 1rem; background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 0.5rem; color: #8b5cf6; text-decoration: none; transition: all 0.3s ease;">
                <strong>📨 Kafka</strong><br>
                <small style="color: #94a3b8;">Message streaming</small>
            </a>
        </div>
    </div>
</div>

<style>
@keyframes pulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
}

.popular-links a:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.search-suggestion input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
</style>