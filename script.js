  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header'); // Selector del contenedor

    if (!header) {
        console.error('No se encontró el elemento <header>.');
        return;
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Configuración del copo
        snowflake.style.left = Math.random() * header.offsetWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración entre 2 y 5 segundos
        snowflake.style.opacity = Math.random();
        snowflake.style.width = snowflake.style.height = Math.random() * 8 + 5 + 'px';

        header.appendChild(snowflake);

        // Eliminar el copo al finalizar la animación
        setTimeout(() => snowflake.remove(), 5000);
    }

    // Crear copos de nieve periódicamente
    const snowInterval = setInterval(createSnowflake, 200);

    // Detener la nieve en dispositivos móviles
    if (window.innerWidth < 768) {
        clearInterval(snowInterval);
    }
});
