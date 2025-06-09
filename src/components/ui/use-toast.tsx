export function useToast() {
    return {
        toast: ({ title, description, variant }: {
            title?: string;
            description?: string;
            variant?: "default" | "destructive";
        }) => {
            const toastElement = document.createElement('div');
            toastElement.className = `fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg p-4 shadow-lg ${variant === 'destructive' ? 'bg-destructive text-destructive-foreground' : 'bg-background'
                }`;

            const content = document.createElement('div');
            if (title) {
                const titleElement = document.createElement('div');
                titleElement.className = 'font-semibold';
                titleElement.textContent = title;
                content.appendChild(titleElement);
            }

            if (description) {
                const descElement = document.createElement('div');
                descElement.className = 'text-sm';
                descElement.textContent = description;
                content.appendChild(descElement);
            }

            toastElement.appendChild(content);
            document.body.appendChild(toastElement);

            setTimeout(() => {
                toastElement.classList.add('opacity-0', 'transition-opacity');
                setTimeout(() => {
                    document.body.removeChild(toastElement);
                }, 300);
            }, 3000);
        }
    }
}