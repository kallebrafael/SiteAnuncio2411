document.addEventListener('DOMContentLoaded', () => {
    // 1. Cronômetro regressivo para gatilho de urgência (Marketing Digital)
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        let timeInSeconds = 2 * 3600 + 59 * 60 + 59; // 02:59:59

        setInterval(() => {
            if (timeInSeconds <= 0) return;
            timeInSeconds--;

            const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
            const seconds = String(timeInSeconds % 60).padStart(2, '0');

            countdownEl.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }

    // 2. Validação e Feedback de UX no Formulário de Captura
    const leadForm = document.getElementById('leadForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const nivel = document.getElementById('nivel').value;

            if (!nome || !email || !nivel) {
                alert('Por favor, preencha todos os campos para garantir sua vaga.');
                return;
            }

            // Simula o envio e exibe feedback claro de sucesso (Princípio de Visibilidade do Status - UX)
            feedbackMessage.innerHTML = `🎉 Parabéns, <strong>${nome}</strong>! Enviamos o acesso da turma e seu cupom de 40% para <strong>${email}</strong>.`;
            feedbackMessage.classList.remove('hidden');

            // Limpa o formulário após o envio
            leadForm.reset();
        });
    }
});