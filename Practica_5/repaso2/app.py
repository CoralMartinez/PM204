import streamlit as st

st.set_page_config(page_title="Survival Guide: El Reto Móvil", layout="wide")

# -------------------------------
# ESTADOS
# -------------------------------
if "camara" not in st.session_state:
    st.session_state.camara = False
if "oraculo" not in st.session_state:
    st.session_state.oraculo = False
if "skills" not in st.session_state:
    st.session_state.skills = False

# -------------------------------
# TITULO
# -------------------------------
st.title("Survival Guide: El Reto Móvil")
st.subheader("Bienvenido estudiante perdido... Sobrevive a Programación Móvil")

menu = st.sidebar.radio(
    "Sistema de Navegación",
    [
        "Cámara de las Reglas",
        "Oráculo de las Notas",
        "Skills a desbloquear",
        "Línea del Tiempo"
    ]
)

# ==================================================
# CAMARA
# ==================================================
if menu == "Cámara de las Reglas":

    st.header("La Cámara de las Reglas")

    st.write("""
### Reglas

- Respeto  
- Importante participación activa en orden  
- No entregar trabajos incompletos  
- No se aplican examen fuera de tiempo  
- Plagio de trabajos = 0 para todos  
- 3 faltas = Final del parcial  
- Calificación Máxima en final 8  
- Aprender e investigar no usar IA de forma indebida  
- Completar entrega de los trabajos para su revisión  
- Entregas en PDF  
- Avisos de clase  
- Entregas autorizadas con retraso = 5 Calif Max  

### Formas de trabajo

### Teoría

Número de actividades consecutivas. De igual manera, se realizarán trabajos como:

- Investigaciones  
- Mapas  
- Cuestionarios  
- Exposiciones  

### Práctica

Número de actividades consecutivas. Por otra parte, se realizarán trabajos como:

- Reportes  
- Video de reportes  
- Evidencias en GitHub  

### Classroom

**Portada**

- Diseño Libre  
- Logo, Tema, datos alumno, Materia  

**Conclusión Aprendizaje**

- Descripción de lo aprendido
""")

    p1 = st.text_input("1. ¿Calificación máxima por entrega tardía?")
    p2 = st.text_input("2. ¿Cuántas faltas puedes tener sin ir a final?")

    if st.button("Comprobar Reglas"):

        if p1.strip() == "5" and p2.strip() == "2":
            st.session_state.camara = True
            st.success("Sección desbloqueada")
        else:
            st.error("Incorrecto")

# ==================================================
# ORACULO
# ==================================================
elif menu == "Oráculo de las Notas":

    if not st.session_state.camara:
        st.warning("Primero completa Cámara de las Reglas")

    else:

        st.header("El Oráculo de las Notas")

        st.write("""
| Parcial | Conocimiento | Desempeño | Producto | Proyecto |
|--------|--------------|-----------|----------|----------|
| 1P | 40% | 20% | 30% | 10% |
| 2P | 40% | 20% | 30% | 10% |
| 3P | 10% | 10% | 30% | 50% |
""")

        st.write("""
### Desempeño

- Participación en clase  
- Trabajos completos en classroom  
- Commits y Push en tu repo  
- Respetar tiempos de entrega  
- Calidad Universitaria Obligatoria  

### Producto

Proyecto didáctico de la materia  

- Equipo asignado  
- Temas Materia + Background  
- 1 entrega por parcial  
- Recomiendo que pregunten  
""")

        p1 = st.text_input("1. ¿Qué se evalúa en evidencia de producto?")
        p2 = st.text_input("2. ¿Cuánto vale proyecto integrador en 3er parcial?")

        if st.button("Comprobar Oráculo"):

            if "proyecto" in p1.lower() and p2.strip() == "50":
                st.session_state.oraculo = True
                st.success("Sección desbloqueada")
            else:
                st.error("Incorrecto")

# ==================================================
# SKILLS
# ==================================================
elif menu == "Skills a desbloquear":

    if not st.session_state.oraculo:
        st.warning("Primero completa Oráculo de las Notas")

    else:

        st.header("Skills a desbloquear")

        st.write("""
### Objetivo general

El alumno desarrollará aplicaciones móviles mediante lenguajes de programación, entornos de desarrollo, diseño de interfaces de usuario, arquitecturas, patrones de diseño y herramientas de programación móvil.

### Objetivo de la materia

Soluciones tecnológicas multiplataforma de software web y móvil utilizando:

- Programación orientada a objetos  
- JavaScript  
- Python  
- ReactNative  
- Frameworks  
- Bases de datos  
- API  
- Servidor web o móvil  
- Estándares de calidad y diseño  

### Temario de la materia

I. Introducción a aplicaciones móviles  

II. Programación de aplicaciones móviles  

III. Despliegue de aplicaciones móviles
""")

        p1 = st.text_input("1. ¿Qué lenguajes se utilizarán?")
        p2 = st.text_input("2. ¿Cuál es el nombre del segundo tema para segundo parcial?")

        if st.button("Comprobar Skills"):

            if "python" in p1.lower() and "javascript" in p1.lower() and "programación" in p2.lower():
                st.session_state.skills = True
                st.success("Sección desbloqueada")
            else:
                st.error("Incorrecto")

# ==================================================
# TIMELINE
# ==================================================
elif menu == "Línea del Tiempo":

    if not st.session_state.skills:
        st.warning("Primero completa Skills")

    else:

        st.header("Línea del Tiempo")

        st.write("""
- Examen de primer parcial: 01 junio  

- Examen de segundo parcial: 6 julio  

-  Examen de tercer parcial: 10 agosto  

- Examen final: 17 agosto
""")

        p1 = st.text_input("1. ¿Fecha del primer parcial?")
        p2 = st.text_input("2. ¿Fecha del tercer parcial?")

        if st.button("Comprobar Fechas"):

            if "1" in p1 and "junio" in p1.lower() and "10" in p2 and "agosto" in p2.lower():
                st.success("Felicidades, terminaste la aventura")
            else:
                st.error("Incorrecto")
