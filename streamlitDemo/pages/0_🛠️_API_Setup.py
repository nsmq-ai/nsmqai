import streamlit as st
from utility import get_stt_text

st.set_page_config(page_title="API Setup", page_icon="🎙️", layout="wide")

st.markdown("# API Setup 🛠️")
st.write(
    """
    This page is for setting up the API URLs for each the ML Servers
    """
)

st.write("## Speech To Text ")

response = ''
with st.spinner("Fetching"):
    response = get_stt_text()
st.success('Done')
st.write(response)
