# Imagen base liviana y actualizada
FROM node:18-alpine

# Instalación de paquetes necesarios
RUN apk add --no-cache nano

# Directorio de trabajo
WORKDIR /app

# Copia solo archivos de dependencias primero (para cache de Docker)
COPY package*.json ./

# Instalación de dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto usado por Angular
EXPOSE 4200

# Comando por defecto: servir Angular accesible desde el exterior
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
