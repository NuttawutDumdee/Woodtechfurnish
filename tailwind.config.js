module.exports = {
    plugins: [
        require('@tailwindcss/line-clamp'),
        // plugin อื่น ๆ ถ้ามี
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4f46e5',
                    light: '#6366f1',
                    dark: '#4338ca',
                },
                secondary: '#6b7280',
                background: '#f9fafb',
                textPrimary: '#111827',
                textSecondary: '#374151',
                borderColor: '#e5e7eb',
            },
            fontFamily: {
                kanit: ["'Kanit'", 'sans-serif'],
            },
        },
    },
    extend: {
        boxShadow: {
            soft: '0 2px 10px rgba(0,0,0,0.08)',
            card: '0 4px 20px rgba(0,0,0,0.06)',
        },
        borderRadius: {
            xl: '1.25rem',
            '2xl': '1.5rem',
        },
        transitionDuration: {
            DEFAULT: '250ms',
        },
    }
};
