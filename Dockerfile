# Usa la imagen base de Node
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto de desarrollo de Angular
EXPOSE 4200

# Comando por defecto al arrancar el contenedor
CMD ["npm", "run", "start"]
